import * as superagent from "superagent";
import axios from "axios";

var axios1 = axios.create({
  withCredentials: true,
});

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://eyesave.herokuapp.com"
    : "http://localhost:8000";

export const getChildrenAttendance = async () => {
  const { body } = await superagent.get(`${BASE_URL}/childrenAttendance`);
  return body;
};

export const getStaffAttendance = async () => {
  const { body } = await superagent.get(`${BASE_URL}/staffAttendance`);
  return body;
};

export const getChildren = async () => {
  const { body } = await superagent.get(`${BASE_URL}/children`);
  return body;
};

export const getRecordings = async () => {
  const { body } = await superagent.get(`${BASE_URL}/recordings`);
  return body;
};

export const getEscorts = async () => {
  const { body } = await superagent.get(`${BASE_URL}/escorts`);
  return body;
};

export const getStaff = async () => {
  const { body } = await superagent.get(`${BASE_URL}/staff`);
  return body;
};

export const getEvents = async () => {
  const { body } = await superagent.get(`${BASE_URL}/events`);
  return body;
};

export const getFormById = async (formId) => {
  const { body } = await superagent.get(`${BASE_URL}/forms/${formId}`);
  return body;
};

export const getSettingsById = async (settingsId) => {
  const { body } = await superagent.get(`${BASE_URL}/settings/${settingsId}`);
  return body;
};

export const postStaff = async (newStaff) =>
  await superagent.post(`${BASE_URL}/staff`).send(newStaff);
export const postChild = async (newChild) =>
  await superagent.post(`${BASE_URL}/children`).send(newChild);
export const postChildAttendance = async (attendance) =>
  await superagent.post(`${BASE_URL}/childrenAttendance`).send(attendance);
export const postEscort = async (newEscort) =>{
  await superagent.post(`${BASE_URL}/escorts`).send(newEscort);
}
export const postForm = async () =>
  await superagent.post(`${BASE_URL}/forms`).send();

export const updateChild = async (updateChild, childId) =>
  await superagent.put(`${BASE_URL}/children/${childId}`).send(updateChild);
export const updateChildAttendanceByDateAndChildId = async (date,childId,attendance) => {
    await superagent.put(`${BASE_URL}/childrenAttendance/${date}/children/${childId}`).send(attendance);
};
export const updateSettings = async (settings) =>
{
  return await superagent.put(`${BASE_URL}/settings/${settings._id}`).send(settings);
}

export const deleteChild = async (childId) => {
  const { body } = await superagent.delete(`${BASE_URL}/children/${childId}`);
  return body;
};

export const deleteEscort = async (escortId) => {
  const { body } = await superagent.delete(`${BASE_URL}/escorts/${escortId}`);
  return body;
};

export const deleteEmployee = async (employeeId) => {
  const { body } = await superagent.delete(`${BASE_URL}/staff/${employeeId}`);
  return body;
};

export const login = (email, password) => axios1({
    method: "post",
    url: `${BASE_URL}/auth/login`,
    data: {
      email: email,
      password: password,
    },
  });

export const signUp = (employee) => axios1.post(`${BASE_URL}/auth/register`, employee);