import React, { useState, useEffect } from 'react'
import CollapseMenu from './CollapseMenu'
import { getFoodListMenu } from '../../api'
import * as TYPES from '../../api/common/list_types'

const CollapseMenuList = () => {

    const [khaivi, setKhaiVi] = useState([])
    const [ghe, setGhe] = useState([])
    const [cahap, setCaHap] = useState([])
    const [oc, setOc] = useState([])
    const [ocmongtay, setOcMongTay] = useState([])
    const [ca, setCa] = useState([])
    const [lau, setLau] = useState([])
    const [trung, setTrung] = useState([])
    const [thit, setThit] = useState([])
    const [ga, setGa] = useState([])
    const [tom, setTom] = useState([])
    const [ochuong, setOcHuong] = useState([])
    const [sodiep, setSoDiep] = useState([])
    const [hau, setHau] = useState([])
    const [com, setCom] = useState([])
    const [chao, setChao] = useState([])
    const [nuoc, setNuoc] = useState([])

    const getDataList = () => {
        getFoodListMenu({ id: TYPES.titleList.khai_vi.ID, name: TYPES.titleList.khai_vi.NAME })
            .then((response) => {
                setKhaiVi(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.ghe.ID, name: TYPES.titleList.ghe.NAME })
            .then((response) => {
                setGhe(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.ca_hap.ID, name: TYPES.titleList.ca_hap.NAME })
            .then((response) => {
                setCaHap(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.oc.ID, name: TYPES.titleList.oc.NAME })
            .then((response) => {
                setOc(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.oc_mong_tay.ID, name: TYPES.titleList.oc_mong_tay.NAME })
            .then((response) => {
                setOcMongTay(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.ca.ID, name: TYPES.titleList.ca.NAME })
            .then((response) => {
                setCa(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.lau.ID, name: TYPES.titleList.lau.NAME })
            .then((response) => {
                setLau(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.trung.ID, name: TYPES.titleList.trung.NAME })
            .then((response) => {
                setTrung(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.thit.ID, name: TYPES.titleList.thit.NAME })
            .then((response) => {
                setThit(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.ga.ID, name: TYPES.titleList.ga.NAME })
            .then((response) => {
                setGa(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.tom.ID, name: TYPES.titleList.tom.NAME })
            .then((response) => {
                setTom(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.oc_huong.ID, name: TYPES.titleList.oc_huong.NAME })
            .then((response) => {
                setOcHuong(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.so_diep.ID, name: TYPES.titleList.so_diep.NAME })
            .then((response) => {
                setSoDiep(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.hau.ID, name: TYPES.titleList.hau.NAME })
            .then((response) => {
                setHau(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.com.ID, name: TYPES.titleList.com.NAME })
            .then((response) => {
                setCom(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.chao.ID, name: TYPES.titleList.chao.NAME })
            .then((response) => {
                setChao(response.shift())
            });
        getFoodListMenu({ id: TYPES.titleList.nuoc.ID, name: TYPES.titleList.nuoc.NAME })
            .then((response) => {
                setNuoc(response.shift())
            });
    }

    useEffect(() => {
        getDataList()
    }, [])

    return (
        <>
            <CollapseMenu menu={khaivi} />
            <CollapseMenu menu={ghe} />
            <CollapseMenu menu={cahap} />
            <CollapseMenu menu={oc} />
            <CollapseMenu menu={ocmongtay} />
            <CollapseMenu menu={ca} />
            <CollapseMenu menu={lau} />
            <CollapseMenu menu={trung} />
            <CollapseMenu menu={thit} />
            <CollapseMenu menu={ga} />
            <CollapseMenu menu={tom} />
            <CollapseMenu menu={ochuong} />
            <CollapseMenu menu={sodiep} />
            <CollapseMenu menu={hau} />
            <CollapseMenu menu={com} />
            <CollapseMenu menu={chao} />
            <CollapseMenu menu={nuoc} />

        </>
    )
}

export default CollapseMenuList