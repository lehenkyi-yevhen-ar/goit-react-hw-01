import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.h}>Type</th>
            <th className={s.h}>Amount</th>
            <th className={s.h}>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className={s.type}>
                {transaction.type}
              </td>
              <td className={s.amount}>
                {transaction.amount}
              </td>
              <td className={s.currency}>
                {transaction.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
