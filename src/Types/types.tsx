export type studentProperties =
  | "studentID"
  | "FirstName"
  | "LastName"
  | "NominationType"
  | "DistrictWorkEmail"
  | "PersonalEmail"
  | "NominatorFirstName"
  | "NominatorLastName"
  | "NominatorWorkEmail"
  | "SchoolDistrict"
  | "SchoolName"
  | "Cohort";

export type personnelProperties = "FirstName" | "LastName" | "Title" | "Type";

export type rubricProperties =
  | "RubricName"
  | "Dimension/Criterion"
  | "PossiblePoints"
  | "Criteria";

export type assessmentProperties =
  | "StudentID"
  | "RubricName"
  | "Facilitator"
  | "Date"
  | "Points"
  | "Comments"
  | "Criterion";
