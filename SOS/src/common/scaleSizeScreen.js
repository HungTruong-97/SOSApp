export const scaleSizeScreen=(param,sizeScreen,isHeight)=>{
    const widthDesign=375;
    const heightDesign=812;
    return isHeight?
                param*sizeScreen/heightDesign
                :param*sizeScreen/widthDesign;
}