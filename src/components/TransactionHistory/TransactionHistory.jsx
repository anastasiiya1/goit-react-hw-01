import css from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
	return(
		<>
		<table className={css.table}>
			<thead>
				<tr>
					<th className={css.tableTitle}>Type</th>
					<th className={css.tableTitle}>Amount</th>
					<th className={css.tableTitle}>Currency</th>
				</tr>
			</thead>
			
			<tbody>
				{items.map(({id, type, amount, currency}) => (
					<tr key={id}>
					<td className={css.tableData}>{type}</td>
					<td className={css.tableData}>{amount}</td>
					<td className={css.tableData}>{currency}</td>
				</tr>
				))}
			</tbody>
		</table>
		</>
	)
}

export default TransactionHistory