import React from "react";

export const JournalEntry = (value = 0) => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://64.media.tumblr.com/1ce0efd81be228efba222b5620c62ee1/db0efc5eecf5c3fa-f7/s2048x3072/94c489e2f9864bb88f40322e0ff92ef36ea8d373.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">aaa</p>
      </div>

        <div className="journal__entry-date-box">
            <span>
                Monday
            </span>
            <h4>28</h4>
        </div>

    </div>
  );
};
