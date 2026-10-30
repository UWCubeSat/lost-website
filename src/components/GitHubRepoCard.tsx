import React, { useEffect, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'

interface RepoData {
  stargazers_count: number
  forks_count: number

  language: string
  description: string
  topics: string[]
  license: { spdx_id: string } | null
  updated_at: string
}

const REPO_URL = 'https://github.com/UWCubeSat/lost'
const API_URL = 'https://api.github.com/repos/UWCubeSat/lost'
const CACHE_KEY = 'github-repo-lost'
const CACHE_TTL = 1000 * 60 * 60

function getCachedData(): RepoData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function setCachedData(data: RepoData) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

function RepoCard({ data }: { data: RepoData | null }) {
  const updatedDate = data
    ? new Date(data.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null

  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-xl mx-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-600/30 shadow-lg shadow-blue-600/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 hover:border-blue-500/50 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-white text-lg font-semibold">
          <FiGithub className="text-xl" />
          <span>UWCubeSat/lost</span>
        </div>
        <FiExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" />
      </div>

      <p className="text-left text-gray-400 text-sm mb-4">
        {data?.description ??
          'Open source star tracker for small, low-power, low-cost satellites'}
      </p>

      {data && (
        <div className="flex items-center gap-5 text-sm text-gray-300 mb-4">
          <span className="flex items-center gap-1">
            <AiOutlineStar className="text-yellow-400" />
            {data.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineFork />
            {data.forks_count}
          </span>
          {data.language && (
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
              {data.language}
            </span>
          )}
        </div>
      )}

      {data?.topics && data.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {data.topics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-xs rounded-full bg-blue-600/15 text-blue-300"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 text-xs text-gray-500">
        {data?.license && <span>{data.license.spdx_id}</span>}
        {updatedDate && <span>Updated {updatedDate}</span>}
        {!data && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
            C++
          </span>
        )}
      </div>
    </a>
  )
}

export function GitHubRepoCard() {
  const [data, setData] = useState<RepoData | null>(getCachedData)
  const [loading, setLoading] = useState(!getCachedData())

  useEffect(() => {
    const controller = new AbortController()
    fetch(API_URL, {
      headers: { Accept: 'application/vnd.github.mercy-preview+json' },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((fresh: RepoData) => {
        setCachedData(fresh)
        setData(fresh)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  if (loading && !data) {
    return (
      <div className="w-full max-w-xl mx-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-1/3 mb-4" />
        <div className="h-4 bg-gray-700 rounded w-full mb-2" />
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-4" />
        <div className="flex gap-4">
          <div className="h-4 bg-gray-700 rounded w-12" />
          <div className="h-4 bg-gray-700 rounded w-12" />
          <div className="h-4 bg-gray-700 rounded w-12" />
        </div>
      </div>
    )
  }

  return <RepoCard data={data} />
}
