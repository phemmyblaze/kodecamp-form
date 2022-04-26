import { useState } from "react";

const KodeForm = () => {
  const [KodeValues, setKodeValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    address: "",
    bio: "",
  });

  const [profileValues, setProfileValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    address: "",
    bio: "",
  });

  const [show, setShow] = useState(false);

  const kodeSubmit = (event) => {
    event.preventDefault();
    setProfileValues(KodeValues);
    setShow(true);
  };

  return (
    <>
      <div className="star">
        <form onSubmit={kodeSubmit}>
          <h2 className="m-3 kode">Kodecamp form</h2>
          <div className="">
            <div className="kode-form m-5">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                required
                onChange={(e) =>
                  setKodeValues({
                    ...KodeValues,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="kode-form m-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                required
                onChange={(e) =>
                  setKodeValues({
                    ...KodeValues,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="kode-form m-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) =>
                  setKodeValues({
                    ...KodeValues,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div
              className="kode-form m-3"
              onChange={(e) =>
                setKodeValues({
                  ...KodeValues,
                  gender: e.target.value,
                })
              }
            >
              <label htmlFor="gender">Gender</label>
              <div id="sex">
                <p>
                  <input type="radio" value="Male" name="gender" required />{" "}
                  Male{" "}
                </p>
                <p>
                  <input type="radio" value="Female" name="gender" /> Female{" "}
                </p>
                <p>
                  <input type="radio" value="Other" name="gender" /> Other{" "}
                </p>
              </div>
            </div>
            <div className="kode-form m-3 address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                required
                onChange={(e) =>
                  setKodeValues({
                    ...KodeValues,
                    address: e.target.value,
                  })
                }
              />
            </div>
            <div className="kode-form m-3 address">
              <label htmlFor="bio">Bio</label>
              <textarea
                type="text"
                id="bio"
                rows="3"
                cols="50"
                // minLength="200"
                required
                onChange={(e) =>
                  setKodeValues({
                    ...KodeValues,
                    bio: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          <div className="mx-4 my-1">
            <button className="btn-smp">Submit form</button>
          </div>
        </form>
        {show && (
          <div className="details">
            <h2 className="details-text">Submitted details</h2>
            <p>
              Full Name: {profileValues.firstName} {profileValues.lastName}
            </p>
            <p>Email: {profileValues.email}</p>
            <p>Gender: {profileValues.gender}</p>
            <p>Address: {profileValues.address}</p>
            <p>Bio: {profileValues.bio}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default KodeForm;
