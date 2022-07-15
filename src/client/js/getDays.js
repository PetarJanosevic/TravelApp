// this function evaluates if a daily OR hourly forecast is needed to be fetched in the weather api. This is determined by the fact if the arrival date is 7 days ahead. 
const getDays = async (inputDate) => {
    let today = new Date();
    let todaysDay = today.getDate();
    let inputedDay = new Date(inputDate);
    let inputedDayForReal = inputedDay.getDate();
    let howManyDays = inputedDayForReal - todaysDay
    console.log(howManyDays > 7)
    return howManyDays > 7
}


export { getDays }