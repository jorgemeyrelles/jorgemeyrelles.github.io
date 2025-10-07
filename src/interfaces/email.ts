export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UseResendReturn {
  sendEmail: (data: EmailData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export interface UseEmailJSReturn {
  sendEmail: (data: EmailData) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}
