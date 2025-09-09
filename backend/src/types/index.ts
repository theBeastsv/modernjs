export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  language: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Collaborator {
  id: string;
  documentId: string;
  userId: string;
  createdAt: Date;
}
