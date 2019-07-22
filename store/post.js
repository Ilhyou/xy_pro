export const state = () => ({
    //文章数据
    postInfo:{
        // postList:[],
    } ,

})

export const mutations = {
    setPostData(state,data){
        state.postInfo=data
    },

}