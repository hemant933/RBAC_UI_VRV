# RBAC User Interface Project

## Overview

This project is an implementation of a **Role-Based Access Control (RBAC)** system, designed to provide an admin interface for managing users, roles, and permissions. The admin can manage users, assign roles, and define specific permissions for different roles, which enables secure and efficient user management.

## Features

- **User Management:** Add, edit, delete, and manage users. Assign roles to users and toggle their status (Active/Inactive).
- **Role Management:** Define roles and assign them specific permissions (e.g., Read, Write, Delete).
- **Dynamic Permissions:** Assign or modify permissions for roles dynamically. Permissions can be easily updated or removed.
- **Search and Filtering:** Search and filter users or roles based on various criteria.
- **Responsive Design:** Mobile-friendly layout to ensure a seamless user experience across devices.

## Technologies Used

- **Frontend:** React.js, Axios, Bootstrap
- **Backend (Optional):** JSON Server for simulating API calls
- **Database (Mocked):** `db.json` for storing users, roles, and permissions
- **Security:** Basic input validation and error handling to ensure a secure application

## Installation Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hemant933/rbac-ui.git
   cd rbac-ui
