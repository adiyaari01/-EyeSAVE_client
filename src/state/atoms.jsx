import { atom } from "recoil";
import { getChildrenAttendance, getStaff, getEscorts, getStaffAttendance, getChildren, getEvents } from "../api"


const initializeChildrenAttendanceState = ({setSelf, onSet}) => {
    setSelf(getChildrenAttendance());
}

const initializeStaffAttendanceState = ({setSelf, onSet}) => {
    setSelf(getStaffAttendance());
}

const initializeChildrenInfoState = ({setSelf, onSet}) => {
    setSelf(getChildren());
}

const initializeEscortsInfoState = ({setSelf, onSet}) => {
    setSelf(getEscorts());
}

const initializeStaffInfoState = ({setSelf, onSet}) => {
    setSelf(getStaff());
}
const initializeEventsState = ({setSelf, onSet}) => {
    setSelf(getEvents());
}

export const IsLoggedInState = atom({
    key: "IsLoggedInState",
    default: flase //TODO: change to false
})

export const childrenAttendanceState = atom({
    key: "childrenAttendanceState",
    default: null,
    effects_UNSTABLE: [initializeChildrenAttendanceState]
})

export const staffAttendanceState = atom({
    key: "staffAttendanceState",
    default: null,
    effects_UNSTABLE: [initializeStaffAttendanceState]
})

export const childrenInfoState = atom({
    key: "childrenInfoState",
    default: null,
    effects_UNSTABLE: [initializeChildrenInfoState]
})

export const escortsInfoState = atom({
    key: "escortsInfoState",
    default: null,
    effects_UNSTABLE: [initializeEscortsInfoState]
})

export const staffInfoState = atom({
    key: "staffInfoState",
    default: null,
    effects_UNSTABLE: [initializeStaffInfoState]
})

export const eventsState = atom({
    key: "evetnsState",
    default: null,
    effects_UNSTABLE: [initializeEventsState]
})
