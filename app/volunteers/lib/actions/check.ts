"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

const GenAI = new GoogleGenerativeAI("AIzaSyBGmCJ5QrA40DE8UaF83bHduHCzyBDa4ec");
const model = GenAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function handler(formData: any) {
    const {
        companyName,
        contactInfo,
        registrationDetails,
        description,
        website,
        socialMedia,
        missionGoals,
        termsConditions,
    } = formData;
    const isValid = await runValidationAlgorithm({
      companyName,
      contactInfo,
      registrationDetails,
      description,
      website,
      socialMedia,
      missionGoals,
      termsConditions,
    });
    if (isValid) {
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

        return { message: 'Data saved successfully!' };
      } catch (error) {
        return { error: 'Failed to save data', details: error };
      }
    } else {
      return { error: 'Validation failed' };
    }
    // Run your algorithm here
    
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

        const whoisApiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_Z4Y9PMM2TCIF89L0IeX0xVjZS8HAj&domainName=${encodeURIComponent(website)}`;
        const whoisApiResponse = await fetch(whoisApiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

        if (!whoisApiResponse.ok) {
          throw new Error(`WHOIS API error: ${whoisApiResponse.statusText}`);
        }
    
        const whoisData = await whoisApiResponse.text();
    
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
            Return only either trustworthy or not-ideal. If not enough details are given, return not-ideal.
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
