const OtherIcon = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.75 4C20.9926 4 22 5.00736 22 6.25V17.7546C22 18.9972 20.9926 20.0046 19.75 20.0046H4.25C3.00736 20.0046 2 18.9972 2 17.7546V6.25C2 5.00736 3.00736 4 4.25 4H19.75ZM19.75 5.5H4.25C3.83579 5.5 3.5 5.83579 3.5 6.25V17.7546C3.5 18.1688 3.83579 18.5046 4.25 18.5046H19.75C20.1642 18.5046 20.5 18.1688 20.5 17.7546V6.25C20.5 5.83579 20.1642 5.5 19.75 5.5ZM9.75 12.5C10.1642 12.5 10.5 12.8358 10.5 13.25V13.7427L10.4921 13.8513C10.3293 14.9642 9.39767 15.5009 7.99995 15.5009C6.60213 15.5009 5.67048 14.9637 5.50787 13.8501L5.5 13.7418V13.25C5.5 12.8358 5.83579 12.5 6.25 12.5H9.75ZM13.2523 12.9961H17.75C18.1642 12.9961 18.5 13.3319 18.5 13.7461C18.5 14.1258 18.2178 14.4396 17.8518 14.4893L17.75 14.4961H13.2523C12.8381 14.4961 12.5023 14.1604 12.5023 13.7461C12.5023 13.3664 12.7844 13.0526 13.1505 13.003L13.2523 12.9961H17.75H13.2523ZM8 8.50218C8.82841 8.50218 9.49997 9.17374 9.49997 10.0022C9.49997 10.8306 8.82841 11.5021 8 11.5021C7.17159 11.5021 6.50003 10.8306 6.50003 10.0022C6.50003 9.17374 7.17159 8.50218 8 8.50218ZM13.2523 9.5H17.75C18.1642 9.5 18.5 9.83579 18.5 10.25C18.5 10.6297 18.2178 10.9435 17.8518 10.9932L17.75 11H13.2523C12.8381 11 12.5023 10.6642 12.5023 10.25C12.5023 9.8703 12.7844 9.55651 13.1505 9.50685L13.2523 9.5H17.75H13.2523Z" fill={props.active ? "#0358A7" : "#6F7275"} />
        </svg>
    );
}

export default OtherIcon;