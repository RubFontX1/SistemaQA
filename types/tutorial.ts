export interface Tutorial {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string // ej: "30 min"
  prerequisites: string[]
  content: string
  slug: string
}

export interface TutorialModule {
  id: string
  title: string
  description: string
  icon: string
  tutorials: Tutorial[]
  totalCount: number
}

export interface UserProgress {
  tutorialId: string
  completed: boolean
  progress: number
  lastAccessed: Date
}
