import request from '@/config/axios'

export function queryWithDvId(dvId) {
  return request.get({
    url: '/outerParams/queryWithDvId/' + dvId
  })
}

export function updateOuterParamsSet(requestInfo) {
  return request.post({
    url: '/outerParams/updateOuterParamsSet',
    data: requestInfo,
    loading: true
  })
}

export function getOuterParamsInfo(dvId) {
  return request.get({
    url: '/outerParams/getOuterParamsInfo/' + dvId,
    method: 'get',
    loading: false
  })
}
