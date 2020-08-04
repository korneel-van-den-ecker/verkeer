import React from 'react'

const Boodschap = ({bord,boodschappen}) => {
    //EsLint
    const data = "iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAIAAADajyQQAAAACXBIWXMAAAnYAAAJ2AHHoLmtAAABiElEQVRoge3bSQ7CMAwF0Ar1/ieuEDsWHezvKXYaS94Rkv9wKaJNt/2zv7K29AQNa1gc7BBWdZjUEyr0gdlJ7jwrzJfkyNPD4kguPA3MN1AQTwyLO358Z5bBor/xjksIYNEk37VQ2DCS16IQLEVlXJqHJaosARhYLsmShIKl98oSRgbLUinyPMKqqaSpUFg6SRrsHkZ/ME+/nkSNbxoEM6qibSjMvV0pTeNh7KTjYUjTzjA2UE3YdX4GhsyYAmOjrgFD0pSFnZagYOB0WTA6cMMa1rD3wo4vWvPBoLbMBaNbAY4sCkNU9OCGjYLhpw36FFILplPd2hq2COzWVgdGp835oxndLg1s515FRubD6KapYX8bO8PTSDan+PJbTdj1XeILphVgyGElu8RtOaG5FNguFIY0Z1iB2Ra7jVS2aXiq9W7V3k6UaJOGWXI7RJG+6QIsvOUo0WZZdPltffR6jjyvJXrrLJxAmsN3NhMMD2Qvdbx+oGAgzyVSP7QTKYzI0A/GzVYNm61+LSjA3rn97yEAAAAASUVORK5CYII="
    const Foto = ({ data }) => <img  src={`data:image/jpeg;base64,${data}`} />

    return (
        <div>
            <Foto data={data}></Foto>
        </div>
    )
}

export default Boodschap;