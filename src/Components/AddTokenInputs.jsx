import React from 'react';

function AddTokenInputs() {
  return (
    <form>
      <label htmlFor="token">
        Token
        <input id="token" />
      </label>
      <label htmlFor="balance">
        Balance
        <input id="balance" />
      </label>
      <button type="button">Save</button>
    </form>
  );
}

export default AddTokenInputs;
