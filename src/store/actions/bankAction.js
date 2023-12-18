
export const WITHDRAW_MONY = "WITHDRAW_MONY";
export const DEPOSITE_MONY = "DEPOSITE_MONY";

export const WITHDRAW = (amount) => {
  return{
      type : WITHDRAW_MONY,
      payload : amount

  }
}
export const DEPOSITE = (amount) => {
  return{
      type : DEPOSITE_MONY,
      payload : amount
  }
}