import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth() + 1;
    const birthDay = birthDate.getDate();

    let calculatedYear = currentYear - birthYear;
    let calculatedMonth = currentMonth - birthMonth;
    let calculatedDay = currentDay - birthDay;

    if (calculatedMonth < 0 || (calculatedMonth === 0 && calculatedDay < 0)) {
      calculatedYear -= 1;
      calculatedMonth += 12;
    }

    setAge({
      years: calculatedYear,
      months: calculatedMonth,
      days: calculatedDay,
    });
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <div className="input-container">
        <label>Enter your birth date:</label>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          showYearDropdown
          showMonthDropdown
          dropdownMode="select"
          placeholderText="Select a date"
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <div className="result">
          <p>You are:</p>
          <p>
            <strong>{age.years}</strong> years
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
