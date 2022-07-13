import { DepartmentListItem } from "./DepartmentListItem"

export const DepartmentList = ({ departments }) => {

    return (
        <>
            <h2>This is the DepartmentList component.</h2>
            {/* {
                departments?.map((department) => {
                    return (<DepartmentListItem key={department.id} />)
                })
            } */}
            <ul>
                { departments?.map(department => <DepartmentListItem key={department.id} department={department} />) }
            </ul>
        </>
    )
}