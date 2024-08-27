import { Image } from "../ui/Image/Image"
import './Loading.scss'

export const Loading = () => {
    return (
        <div className="loading">
            <Image width={100} src='https://64.media.tumblr.com/02f1e684630962dfde601535ca66c7ec/4f559fadb3dc32b2-db/s1280x1920/b30ed1f7179224fc6c882fc432975dea793cf25a.gifv' />
        </div>
    )
}