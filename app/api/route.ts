
import type { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../app/firebaseConfig';

const GenAI = new GoogleGenerativeAI("AIzaSyBGmCJ5QrA40DE8UaF83bHduHCzyBDa4ec");
const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { companyName, contactInfo, registrationDetails, description, website, socialMedia, missionGoals, termsConditions } = req.body;

    // Run your algorithm here
    console.log(req.body)
    const isValid = await runValidationAlgorithm(req.body); // Replace with your algorithm
    console.log("Validity is ", isValid); 
    if (true) {
      try {
        const docRef = await addDoc(collection(db, 'organizations'), {
          companyName,
          contactInfo,
          registrationDetails,
          description,
          website,
          socialMedia,
          missionGoals,
          termsConditions,
        });

        return res.status(200).json({ message: 'Data saved successfully!' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to save data', details: error });
      }
    } else {
      return res.status(400).json({ error: 'Validation failed' });
    }
  }
}

async function runValidationAlgorithm(data: any): Promise<boolean> {
    const areFieldsFilled = (
        data.companyName &&
        data.contactInfo &&
        data.registrationDetails &&
        data.description &&
        data.website &&
        data.socialMedia &&
        data.missionGoals &&
        data.termsConditions
      );
    
      // If fields are not filled, return false
      if (!areFieldsFilled) {
        return false;
      }
    
      // Validate the website using WHOIS API
      const isWebsiteValid = await validateWebsite(data.website);
      const isCompanyTrustworthy = await validateWithGemini(data.description, data.missionGoals, data.termsConditions);
      return isWebsiteValid && isCompanyTrustworthy;
    }
    
    async function validateWebsite(website: string): Promise<boolean> {
      try {
        // Call WHOIS API
        const whoisApiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${process.env.WHO_IS_API_KEY}&domainName=${encodeURIComponent(website)}`;
        const whoisApiResponse = await fetch(whoisApiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

        if (!whoisApiResponse.ok) {
          throw new Error(`WHOIS API error: ${whoisApiResponse.statusText}`);
        }
    
        const whoisData = await whoisApiResponse.json();
    
        // Check if WHOIS data contains valid ownership information
        const hasValidOwnership = whoisData && whoisData.domain_status && whoisData.owner && whoisData.owner.length > 0;
        if (hasValidOwnership) {
            return true
        }
        else {
            return false
        }
        // You can also validate further, like say checking registration dates
        

      } catch (error) {
        console.error("Validation error:", error);
        return false; 
    }
}
    async function validateWithGemini(description: string, missionGoals: string, termsConditions: string): Promise<boolean> {
        try {
          const prompt = `
            Given the following company details, analyze if the company is trustworthy and aligned with ethical business practices.
            Return only either trustworthy or not-ideal. 
            Company Description: ${description}
            Mission Goals: ${missionGoals}
            Terms and Conditions: ${termsConditions}
          `;
      
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const analysis = response.text();
      
          console.log('Gemini AI Response:', analysis);
      
          return analysis.includes("trustworthy") || analysis.includes("ethical");
        } catch (error) {
          console.error('Error during Gemini API request:', error);
          return false;
    }
}
