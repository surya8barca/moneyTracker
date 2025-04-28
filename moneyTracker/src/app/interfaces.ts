export interface UserData {
  userId:string,
  
}

export interface CashBook {
  bookId:string,
  bookName:string,
  createdOn:string,
  paymentModes:string[],
  paymentType:string[],
  paymentCategories:string[],
  totalMoneyAdded:number,
  totalMoneySpent:number,
  balanceAmount:number,
}

export interface PaymentRecord {
  paymentId:string,
  paymentDesc:string,
  paymentDate:string,
  paymentTo?:string,
  paymentType:string,
  paymentCategory:string,
  paymentMode:string,
  paymentAmount:number,
}

export const paymentCategoryOptions :string[] = ['Salary','Travel','Entertainment','Food','Miscellaneous','Shopping','Grocery','Entertainment'];
export const paymentModeOptions :string[] = ['Cash','UPI','Credit Card','Debit Card'];
export const PaymentTypeOptions :string[] = ['CashIn','CashOut'];
