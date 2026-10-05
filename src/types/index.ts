export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NewsletterInput {
  name: string;
  email: string;
}

export interface AdmissionInquiry {
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  childName: string;
  childBirthdate: string;
  interestedIn: string;
  anticipatedStart: string;
  message: string;
}
