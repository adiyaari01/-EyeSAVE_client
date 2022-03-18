import { atom } from "recoil";
import { getChildrenAttendance } from "../api"
import { getStaffAttendance } from "../api"
import { getStaff } from "../api"
import { getChildren } from "../api"


const initializeChildrenAttendanceState = ({setSelf, onSet}) => {
    setSelf(getChildrenAttendance());
}

const initializeStaffAttendanceState = ({setSelf, onSet}) => {
    setSelf(getStaffAttendance());
}

const initializeChildrenInfoState = ({setSelf, onSet}) => {
    setSelf(getChildren());
}

const initializeStaffInfoState = ({setSelf, onSet}) => {
    setSelf(getStaff());
}

export const IsLoggedInState = atom({
    key: "IsLoggedInState",
    default: false //TODO: change to false
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

export const staffInfoState = atom({
    key: "staffInfoState",
    default: null,
    effects_UNSTABLE: [initializeStaffInfoState]
})
