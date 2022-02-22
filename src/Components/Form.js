//Build out the form.

import React from "react";

const Form = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    props.change(name, value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          placeholder="Your Name"
          value={values.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          placeholder="Your Email"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Role
        <input
          placeholder="Your Role"
          value={values.role}
          name="role"
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create Team" />
    </form>
  );
};
