export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostFormData {
  title: string;
  body: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
}