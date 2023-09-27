interface Prop {
    itemName: string;
}

const MenuItem = ({itemName}: Prop) => {
    return (
        <a className={itemName === "HOME" ? "btn btn-ghost normal-case text-2xl text-[#FF4BFB] mx-4" : "btn btn-ghost normal-case text-2xl font-light mx-4"}>{itemName}</a>
    )
}

export default MenuItem;