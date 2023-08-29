import { VibeData } from '@/models/vibe/vibe.interface';
import { getVibesData } from '@/models/vibe/vibe.url';
import { useEffect, useState } from 'react'

type UseVibeReturnType = {
  vibe: undefined | VibeData
  error: undefined | string
  isLoading: boolean
  fetchNextPageVibe: () => void
}

const useVibe = (): UseVibeReturnType => {
  const [vibe, setVibe] = useState<VibeData | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchVibeData = async (page: number) => {
    setIsLoading(true)
    try {
      const { productData, totalStoredProductIdsCount, vibeImageUrl } = await getVibesData(page)
      setVibe((oldVibeData) => {
        if (!oldVibeData) return { productData, totalStoredProductIdsCount, vibeImageUrl }
        return ({ totalStoredProductIdsCount, vibeImageUrl, productData: [...oldVibeData.productData, ...productData] })
      })
      setIsLoading(false)
    } catch (error) {
      setError(error as string)
      setIsLoading(false)
    }
  }

  const fetchNextPageVibe = () => {
    if (isLoading) return
    setCurrentPage(prevPage => prevPage + 1)
  }

  useEffect(() => {
    fetchVibeData(currentPage)
  }, [currentPage])

  return { vibe, error, isLoading, fetchNextPageVibe }
}

export default useVibe
