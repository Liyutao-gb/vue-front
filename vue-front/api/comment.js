import request from '@/utils/request'

export default {
    //查询前两条banner数据
    getCommentList(page, limit, courseId) {
        return request({
            url: `/eduservice/comment/getCommentList/${page}/${limit}`,
            method: 'get',
            params: {courseId}
        })
    },

    addComment(comment) {
        return request({
            url: '/eduservice/comment/addComment',
            method: 'post',
            data: comment
        })
    },

}