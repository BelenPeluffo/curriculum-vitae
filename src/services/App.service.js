import personalData from '../database/personal-data.json';

export const getPersonalData = async () => {
  console.log("personalData?", personalData);
  return personalData;
};
