export default function TabButtons({ isSelected, children, ...restprops }) {


    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...restprops}>{children}</button>
        </li >
    );
}