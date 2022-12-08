import React, { useState, useEffect, useContext } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'
import AppContext from '../../context/AppContext'
import { deleteArticleComment, getAllArticleComments } from '../../utils/network-data'

const ArticleComments = () => {
  const [comments, setComments] = useState([])
  const { setIsLoading } = useContext(AppContext)

  const handleDelete = async (comment) => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus komentar ini?',
      text: comment.content,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Tidak'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteArticleComment(comment.id)
        try {
          initData()
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }
    })
  }

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllArticleComments()
      try {
        if (!response.error) {
          setIsLoading(false)
          setComments(response.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }

    fetchData()
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <Container>
      <h1 className='text-center'>Komentar Artikel</h1>
      <div className='mx-5 my-4'>
        <Table className='text-center mt-3' striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pengguna</th>
              <th>Judul Artikel</th>
              <th>Komentar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          {comments.length > 0 ? (
            <tbody>
              {comments.map((comment, index) => (
                <tr key={comment.id}>
                  <td>{index + 1}</td>
                  <td>{comment.user.name}</td>
                  <td>{comment.article.title}</td>
                  <td>{comment.content}</td>
                  <td>
                    <Button variant='danger' type='button' onClick={() => handleDelete(comment)}>
                      <AiFillDelete color='white' />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan='5'>Tidak ada data</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    </Container>
  )
}

export default ArticleComments
