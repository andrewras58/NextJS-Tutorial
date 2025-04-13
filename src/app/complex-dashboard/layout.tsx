import React from "react";

// @ folders within routes are known as "slots" and are used in parallel routing

// the "children" Node that we have been passing has actually been a secret @children slot this entire time

/* parallel routes use cases

- Dashboards with multiple sections (like this one)
- split-view interfaces
- multi-pane layouts
- complex admin interfaces

- any UI where components act independently */

/* parallel routes benefits

- great for splitting a layout in managable slots (can already be done with regular react components)
- independent route handling:
    each slot can handle its own loading and error states meaning each section can load at varying speed and encounter its own errors
- sub-navigation in routes:
    each slot can be a mini-application complete with navigation and state management, interacting with it without affecting other parts
    the application can save on reloads since only the slot needs to reload while navigating within, the others can stay idle
*/

function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}

export default ComplexDashboardLayout;
