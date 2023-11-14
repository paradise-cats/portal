export interface IBillData {
  key?: string,
  title: string,
  price: number,
  amount: number,
  date: string | number,
  description: string,
  photo: string,
}
export   interface IFormError {
  key?: string;
  message?: string;
}
export interface ISortType {
  name?: ''|'a-z'|'z-a';
  date?: ''|'oldest'|'newest';
}
