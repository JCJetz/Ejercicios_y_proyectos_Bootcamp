import { useEffect, useState } from "react";

const employees = [
  {
    id: 1,
    name: "Maria",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 2,
    name: "Jesus",
    experience: 19,
    department: "Services",
  },
  {
    id: 3,
    name: "Ana",
    experience: 13,
    department: "Training",
  },
  {
    id: 4,
    name: "Peter",
    experience: 2,
    department: "Sales",
  },
  {
    id: 5,
    name: "Yoshiko",
    experience: 16,
    department: "Services",
  },
  {
    id: 6,
    name: "Raquel",
    experience: 4,
    department: "Training",
  },
  {
    id: 7,
    name: "Esperanza",
    experience: 24,
    department: "Services",
  },
  {
    id: 8,
    name: "Pepe",
    experience: 1,
    department: "Accounting",
  },
  {
    id: 9,
    name: "Ruffe",
    experience: 11,
    department: "Sales",
  },
  {
    id: 10,
    name: "Cora",
    experience: 17,
    department: "Accounting",
  },
];

function App() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState();

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) => {
        return (
          (!department || employee.department === department) &&
          (!experience ||
            (experience === "LESS_THAN_10"
              ? employee.experience < 10
              : employee.experience >= 10))
        );
      })
    );
  }, [department, experience]);

  /*
const filterByDepartment = (department) => {
  setFilteredEmployees(
    employees.filter(employee => {
      return employee.department === department;
    })
  );
};
*/
  const departments = Array.from(
    new Set(employees.map((employee) => employee.department))
  );

  const clearAllFilters = () => {
    setDepartment("");
    setExperience();
  };

  return (
    <div className="App">
      <select onChange={(e) => setDepartment(e.target.value)} 
      value={department}
      >
        <option value="" disabled>
          Seleciona Department
        </option>

        {departments.map((department) => {
          return <option key={department}>{department}</option>;
        })}
      </select>
      <div className="experience_filter">
        <button
          className={`${experience === "LESS_THAN_10" ? "selected" : ""}`}
          onClick={() => setExperience("LESS_THAN_10")}
        >
          Less than 10years
        </button>
        <button
          className={`${experience === "10_PLUS" ? "selected" : ""}`}
          onClick={() => setExperience("10_PLUS")}
        >
          10+ years
        </button>
      </div>
      <button onClick={clearAllFilters}>Clear all filters</button>
            <ul>
        {filteredEmployees.map((employee) => {
          const { id, name, experience, department } = employee;
          return (
            <li key={id}>
              <div>Name: {name}</div>
              <div>Experience: {experience}</div>
              <div>Department: {department}</div>
            </li>
          );
        })}
      </ul>
      {filteredEmployees.lenght === 0 && 
        <div>No employees matching the filter</div>}
    </div>
  );
}
export default App;
