import * as superagent from "superagent"

const BASE_URL =
//   process.env.NODE_ENV === "production" ? "https://eyesaveserver.herokuapp.com" : "http://localhost:8000";
  process.env.NODE_ENV === "production" ? "https://eyesave.herokuapp.com" : "http://localhost:8000";
  

export const getChildrenAttendance = async () => {
    const { body } = await superagent.get(`${BASE_URL}/childrenAttendance`)
    return body;
};

export const getStaffAttendance = async () => {
    const { body } = await superagent.get(`${BASE_URL}/staffAttendance`)
    return body;
};

export const getChildren = async () => {
    const { body } = await superagent.get(`${BASE_URL}/children`)
    return body;
}; 

export const getEscorts = async () => {
    const { body } = await superagent.get(`${BASE_URL}/escorts`)
    return body;
}; 

export const getStaff = async () => {
    const { body } = await superagent.get(`${BASE_URL}/staff`)
    return body;
}; 

export const getEvents = async () => {
    const { body } = await superagent.get(`${BASE_URL}/events`)
    return body;
}; 

export const postStaff = async (newStaff) => await superagent.post(`${BASE_URL}/staff`).send(newStaff);
export const postChild = async (newChild) => await superagent.post(`${BASE_URL}/children`).send(newChild);
export const postEscort = async (newEscort) => await superagent.post(`${BASE_URL}/escorts`).send(newEscort);