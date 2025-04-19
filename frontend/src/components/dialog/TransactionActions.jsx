// import React from 'react'

const TransactionActions = ({ content, onDelete }) => {
    return (
      <div>
        <p className="text-sm">View Details</p>
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="add-btn add-btn-fill"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TransactionActions;
  