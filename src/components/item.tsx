import Link from "next/link";

interface ItemProps {
  comments: number;
  hearts: number;
  id: number;
  text: number;
  title: string;
}

export default function Item({ comments, hearts, id, text, title }: ItemProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex">
        <div className="L_COL mt-6">
          <div className="PROFILE w-10 h-10 bg-gray-500 rounded-full"></div>
        </div>
        <div className="R_COL flex flex-col ml-4 space-y-1">
          <div className="T_INFO flex text-xs space-x-1 pl-2">
            <h2 className="font-bold font-gray-900">서영</h2>
            <span className="text-gray-500">@seoy1108</span>
            <p>·</p>
            <span className="text-gray-500">Nov 9</span>
          </div>
          <Link
            className="T_TEXT rounded-xl bg-gray-200 cursor-pointer"
            href={`/tweets/${id}`}
          >
            <div className="my-2 px-4">
              <p className="text-sm font-bold font-gray-900">
                나 어제 이거 했음ㅋㅋㅋㅋ
              </p>
              <br />
              <p className="text-sm font-gray-900">
                나 어제 이거 했는데 맞는지 확인해줄 사람 아아아 질문질문질문 나
                어제 이거 했는데 맞는지 확인해줄 사람 아아아 질문질문질문 나
                어제 이거 했는데 맞는지 확인해줄 사람 아아아 질문질문질문 나
                어제 이거 했는데 맞는지 확인해줄 사람 아아아 질문질문질문 나
                어제 이거 했는데 맞는지 확인해줄 사람 아아아 질문질문질문
              </p>
            </div>
          </Link>
          <div className="ICONS flex justify-end items-end space-x-2">
            <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>{hearts}</span>
            </div>
            <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>{comments}</span>
            </div>
          </div>
        </div>
        {/* <div className="flex space-x-4">
        <div className="w-20 h-20 bg-gray-400 rounded-md" />
        <div className="pt-2 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <span className="font-medium mt-1 text-gray-900">{text}</span>
        </div>
      </div>
      <div className="flex space-x-2 items-end justify-end">
        <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <span>{hearts}</span>
        </div>
        <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <span>{comments}</span>
        </div>
      </div> */}
      </div>
    </div>
  );
}
