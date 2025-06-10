export default function Admission() {
  return (
    <div className="admission">
      <div className="admission__content">
        <div className="admission__content__texts">
          <h2> ADMISSION</h2>
          <h3>Start the Journey to Freedom</h3>
          <p>
            We welcome men and women (ages 18+) who are ready to surrender,
            heal, and commit to personal change.
          </p>
        </div>

        <div className="admission__content-cards">
          <div className="admission__content-cards__card">
            <div className="admission__content-cards__card-icon">
              <img src="admission/commitment.svg" alt="Commitment Icon" />
            </div>
            <h4>Commitment</h4>
            <p>Willingness to commit to the full program.</p>
          </div>
          <div className="admission__content-cards__card">
            <div className="admission__content-cards__card-icon">
              <img src="admission/conduct.svg" alt="Conduct Icon" />
            </div>
            <h4>Conduct</h4>
            <p>No active involvement in violence or illegal activity.</p>
          </div>
          <div className="admission__content-cards__card">
            <div className="admission__content-cards__card-icon">
              <img src="admission/screening.svg" alt="Screening Icon" />
            </div>
            <h4>Screening</h4>
            <p>Basic screening and agreement to house rules.</p>
          </div>
          <div className="admission__content-cards__card">
            <div className="admission__content-cards__card-icon">
              <img src="admission/referral.svg" alt="Referral Icon" />
            </div>
            <h4>Referral</h4>
            <p>Referral from a family, guardian, or social worker etc.</p>
          </div>
        </div>

        <div className="admission__content-actions">
          <button>Apply Now</button>
          <button className="secondary">Download Admission Form</button>
        </div>
      </div>
    </div>
  );
}
