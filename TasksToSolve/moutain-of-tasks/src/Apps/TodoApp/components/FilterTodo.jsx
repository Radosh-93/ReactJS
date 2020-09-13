import React from "react";
import NativeSelect from "@material-ui/core/NativeSelect";

const FilterTodo = (props) => {
    const filterList = (e) => {
        props.setStatus(e.target.value)
    }
    return(
        <div className='filter-block'>
            <NativeSelect className='select-todo' name="filtered" onChange={filterList}>
                <option value="all" defaultValue>All</option>
                <option value="uncompleted">Uncompleted</option>
                <option value="completed">Completed</option>
            </NativeSelect>
        </div>

    )
}
export default FilterTodo