import React from 'react';

const SignUp = () => {
  // eslint-disable-next-line no-unused-vars
  const s = 'as';
  return (
    <section className="showcase">

      <div className="container">
        <div className="signup-form card">
          <h2>Sign Up</h2>
          <form>
            <div className="form-control">
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-control">
              <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="form-control">
              <input type="password" name="passwordconfirm" id="passwordconfirm" placeholder="Password Confirmation" />
            </div>
            <input type="submit" value="Sign Up" className="btn" />
          </form>
          <hr style={{ marginTop: '30px'; hei }} />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
