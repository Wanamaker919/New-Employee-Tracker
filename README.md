# 12 SQL: Employee Tracker

## Your Task

Developers frequently have to create interfaces that allow non-de
view and interact with information stored in databases. These int
**content management systems (CMS)**. Your assignment this week i
command-line application from scratch to manage a company's emplo
using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to c
walkthrough video that demonstrates its functionality and all of 
acceptance criteria being met. You’ll need to submit a link to th
to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and 
company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departme
roles, view all employees, add a department, add a role, add an e
update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department nam
ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department t
to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data,
employee ids, first names, last names, job titles, departments, s
managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that d
to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for 
role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name,
manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new 
information is updated in the database 
```

## Mock-Up

The following video shows an example of the application being use
line:

[![A video thumbnail shows the command-line employee management a
play button overlaying the view.](./Assets/12-sql-homework-video-
(https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

This Challenge will require a video submission. Refer to the [Ful
Submission Guide](https://coding-boot-camp.github.io/full-stack/c
video-submission-guide) for additional guidance on creating a vid

You’ll need to use the [MySQL2 package](https://www.npmjs.com/pac
connect to your MySQL database and perform queries, the [Inquirer
www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user
line, and the [console.table package](https://www.npmjs.com/packa
to print MySQL rows to the console.

**Important**: You will be committing a file that contains your d
credentials. Make sure that your MySQL password is not used for a
accounts, because it will be visible on GitHub. In upcoming lesso
how to better secure this password, or you can start researching 
that could help you.

You might also want to make your queries asynchronous. MySQL2 exp
` function on Connections to upgrade an existing non-Promise conn
Promises. To learn more and make your queries asynchronous, refer
documentation on MySQL2](https://www.npmjs.com/package/mysql2).

Design the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and 
Assets/12-sql-homework-demo-01.png)

As the image illustrates, your schema should contain the followin

* `department`

    * `id`: `INT PRIMARY KEY`

    * `name`: `VARCHAR(30)` to hold department name

* `role`

    * `id`: `INT PRIMARY KEY`

    * `title`: `VARCHAR(30)` to hold role title

    * `salary`: `DECIMAL` to hold role salary

    * `department_id`: `INT` to hold reference to department role

* `employee`

    * `id`: `INT PRIMARY KEY`

    * `first_name`: `VARCHAR(30)` to hold employee first name

    * `last_name`: `VARCHAR(30)` to hold employee last name

    * `role_id`: `INT` to hold reference to employee role

    * `manager_id`: `INT` to hold reference to another employee t
of the current employee (`null` if the employee has no manage

You might want to use a separate file that contains functions for
specific SQL queries you'll need to use. A constructor function o
helpful for organizing these. You might also want to include a `s
pre-populate your database, making the development of individual 
easier.

## Bonus

Try to add some additional functionality to your application, suc
to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other w
salaries of all employees in that department.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”
incomplete and will not count towards your graduation requirement
incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing els
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Deliverables: 10%

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the 
must be submitted, and a link to the video should be included in 

* The walkthrough video must show all of the technical acceptance
met.

* The walkthrough video must demonstrate how a user would invoke 
from the command line.

* The walkthrough video must demonstrate a functional menu with t
outlined in the acceptance criteria.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the fol

    * Uses the [Inquirer package](https://www.npmjs.com/package/i

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mys
a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/pack
to print MySQL rows to the console.

* Follows the table schema outlined in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming

* Repository follows best practices for class/id naming conventio
quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and 
walkthrough video.

### Application Quality 10%

* The application user experience is intuitive and easy to naviga

### Bonus

Fulfilling any of the following can add up to 20 points to your g
the highest grade you can achieve is still 100:

* Application allows users to update employee managers (2 points)

* Application allows users to view employees by manager (2 points

* Application allows users to view employees by department (2 poi

* Application allows users to delete departments, roles, and empl
for each).

* Application allows users to view the total utilized budget of a
in other words, the combined salaries of all employees in that de
points).

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the appl

* The URL of the GitHub repository, with a unique name and a READ
project.

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Righ
