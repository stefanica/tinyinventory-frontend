function ProductRow(props) {
    return (
        <tr>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td>{props.code}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td>{props.date}</td>
        </tr>
    );
}

export default ProductRow;