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