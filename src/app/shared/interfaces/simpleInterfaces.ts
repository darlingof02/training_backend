export interface User {
    username: string;
    password: string;
}

export interface SkillLevel {
    skillLevelID: string;
    skillName: string;
    skillDescription: string;
}

export interface Employee {
    employeeID: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    age: number;
    active: Boolean;
    skillLevel: SkillLevel;
}


export interface EmployeeForm {
    employeeID: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: {
        year: number;
        month: number;
        day: number;
    }
    age: number;
    active: Boolean;
    skillLevelID: string;
}