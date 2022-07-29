const dz = "https://netease-cloud-music-api-omega-inky.vercel.app"
export const src = async (d)=>{
	return await uni.request({
		url:dz+d
	})
}