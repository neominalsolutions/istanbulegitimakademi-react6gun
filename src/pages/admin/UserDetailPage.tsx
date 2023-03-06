import { useParams } from "react-router-dom";

export default function UserDetailPage() {
  // dinamik url üzerinden route parametrelerini yakalamak için useParams diye bir hook kullanırız

  // react da query string değerlerini okurken bu durumda useSearchParams diye bir hook kullanıyoruz

  const param = useParams();

  console.log("param", param);

  return <>yakalanan değer: {param.name}</>;
}
