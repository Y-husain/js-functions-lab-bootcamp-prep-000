// write your code below!

function happyHolidays(){
<<<<<<< HEAD
  return 'Happy holidays!'
=======
  return `Happy holidays!`
>>>>>>> 0a7a5e98d89ad7e108f9969147f63b707d010815
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
<<<<<<< HEAD
function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(days,holiday){
  return `It\'s ${holiday} days until ${days}!`
}

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
=======

function holidayCountdown(parameter,parameter2){
  console.log `It's ${days} days until ${holiday}!`
}

>>>>>>> 0a7a5e98d89ad7e108f9969147f63b707d010815

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
